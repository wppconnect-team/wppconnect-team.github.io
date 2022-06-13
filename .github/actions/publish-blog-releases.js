const fs = require("fs");
const path = require("path");
const YAML = require("yaml");
const { Octokit } = require("@octokit/action");

const projects = [
  {
    name: "WA-JS",
    slug: "wa-js",
    repository: "wppconnect-team/wa-js",
    tags: ["wppconnect", "wa-js", "javascript", "browser"],
  },
  {
    name: "WPPConnect",
    slug: "wppconnect",
    repository: "wppconnect-team/wppconnect",
    tags: ["wppconnect", "javascript", "nodejs", "lib"],
  },
  {
    name: "WPP Server",
    slug: "wppconnect-server",
    repository: "wppconnect-team/wppconnect-server",
    tags: ["wppconnect", "javascript", "nodejs", "server"],
  },
  {
    name: "Server CLI",
    slug: "server-cli",
    repository: "wppconnect-team/server-cli",
    tags: ["wppconnect", "javascript", "nodejs", "server", "cli"],
  },
];

const blogDir = path.resolve(__dirname, "../../blog");
const octokit = new Octokit();

async function processRelease(project, release) {
  let title = `${project.name} patch release: ${release.name}`;
  let description = `Today we are releasing a patch version ${release.name} for ${project.name}`;

  if (/\.0\.0$/.test(release.tag_name)) {
    title = `${project.name} major release: ${release.name}`;
    description = `Today we are releasing major version ${release.name} for ${project.name}`;
  } else if (/\.0$/.test(release.tag_name)) {
    title = `${project.name} minor release: ${release.name}`;
    description = `Today we are releasing minor version ${release.name} for ${project.name}`;
  }

  if (!release.body) {
    return;
  }

  const types = [...release.body.matchAll(/### ([\w ]+)/g)].map((m) => m[1]);

  if (types.length === 1 || types.length === 2) {
    description += " with " + types.join(" and ");
  } else if (types.length >= 3) {
    const last = types.pop();

    description += " with " + types.join(", ") + " and " + last;
  }
  description += ".";

  const header = {
    title,
    description,
    authors: "wppconnect",
    tags: project.tags,
    image: `https://opengraph.githubassets.com/1/${project.repository}/releases/tag/${release.tag_name}`,
    date: release.published_at,
  };

  let body = release.body;

  // Remove the compare commits
  body = body.replace(/^##? \[[\d.]+\].*$/gm, "").trim();

  // Add bottom information
  body += `\n\nFor more information, see the [release page](${release.html_url}).`;

  const content = `---\n${YAML.stringify(
    header
  ).trim()}\n---\n\n${description}\n\n<!--truncate-->\n\n${body}`;

  const fileName = path.join(blogDir, project.slug, `${release.tag_name}.md`);

  fs.writeFileSync(fileName, content, { encoding: "utf-8" });
}

async function processProject(project) {
  const [owner, repo] = project.repository.split("/", 2);

  const { data: releases } = await octokit.request(
    "GET /repos/{owner}/{repo}/releases",
    {
      owner,
      repo,
      per_page: 5,
    }
  );

  const projectDir = path.join(blogDir, project.slug);

  if (!fs.existsSync(projectDir)) {
    fs.mkdirSync(projectDir);
  }

  for (const release of releases) {
    if (release.draft || release.prerelease) {
      continue;
    }

    await processRelease(project, release);
  }
}

(async function () {
  for (const project of projects) {
    await processProject(project);
  }
})();
