import React from "react";
import TableOfContents from "@/components/TableOfContents";

const GitLab = () => {
  return (
    <div className="min-h-screen bg-zinc-900 text-white flex items-center justify-center pt-28">
      <TableOfContents />
      <div className="bg-zinc-800 mb-24 shadow-md rounded-lg p-8 max-w-3xl w-full">
        <h1 className="text-4xl font-bold mb-4 text-center text-white">
          GitLab Tutorial
        </h1>
        <h3 className="text-xl mb-4 font-bold">What is GitLab?</h3>

        <p className="text-md mb-4">
          Similar to GitHub, GitLab is a web-based platform that provides a
          complete lifecycle toolchain for software development. It is an
          open-source solution that allows developers to collaborate, manage
          repositories, and automate workflows. GitLab integrates tools for
          version control, CI/CD, project management, and monitoring in one
          unified platform.
        </p>

        <h3 className="text-xl mb-4 font-bold">Why do we use GitLab?</h3>

        <p className="text-md mb-4">
          We use GitLab for course assignments to manage and submit code. GitLab
          provides a centralized platform for students to collaborate, track
          changes, and submit assignments. It allows instructors to provide
          feedback, grade assignments, and monitor student progress. GitLab also
          provides a version control system that allows students to track
          changes, revert to previous versions, and collaborate on projects.
        </p>

        <h3 className="text-xl mb-4 font-bold">
          Where can I access my GitLab account?
        </h3>
        <p>
          Every student at the University of Guelph has a GitLab account
          associated with their school email. You can log in to your GitLab
          account by visiting the following link:{" "}
          <a
            href="https://gitlab.socs.uoguelph.ca"
            target="_blank"
            rel="noreferrer noopener"
            className="text-blue-500 hover:underline"
          >
            GitLab Login
          </a>
        </p>

        <img
          src="../images/GitLabLogin.jpg"
          alt="GitLab Login"
          className="md:w-1/2 w/1-2 rounded-lg shadow-lg mt-6 mx-auto mb-8"
        />

        <h3 className="text-xl mb-4 font-bold">Tutorial</h3>
        <p className="text-md mb-4">
          Follow the steps below to learn how to use GitLab for course
          assignments. We'll go through an example of cloning an existing
          repository and adding and committing changes to it
        </p>

        <ol className="list-decimal list-inside text-left space-y-2">
          <li>
            Clone the repository from GitLab:{" "}
            <code className="bg-gray-800 text-white text-sm px-2 py-1 rounded ml-1">
              https://gitlab.socs.uoguelph.ca/achow04/cis2500-gitlab-tutorial
            </code>
          </li>

          <li>
            Navigate to the project directory:{" "}
            <code className="bg-gray-800 text-white text-sm px-2 py-1 rounded ml-1">
              cd cis2500-gitlab-tutorial
            </code>
          </li>

          <li>
            Add a new file to the project:{" "}
            <code className="bg-gray-800 text-white text-sm px-2 py-1 rounded ml-1">
              touch helloWorld.c
            </code>
          </li>

          <li>
            Open the file in a text editor and add some code:{" "}
            <code className="bg-gray-800 text-white text-sm px-2 py-1 rounded ml-1">
              nano helloWorld.c
            </code>
          </li>

          <li>
            Stage the changes:{" "}
            <code className="bg-gray-800 text-white text-sm px-2 py-1 rounded ml-1">
              git add helloWorld.c
            </code>
            You can also add multiple files at once using the following command:{" "}
            <code className="bg-gray-800 text-white text-sm px-2 py-1 rounded ml-1">
              git add .
            </code>
          </li>

          <li>
            Commit the changes:{" "}
            <code className="bg-gray-800 text-white text-sm px-2 py-1 rounded ml-1">
              git commit -m "[Tutorial] Adds helloWorld.c"
            </code>
          </li>

          <li>
            Push the changes to the remote repository:{" "}
            <code className="bg-gray-800 text-white text-sm px-2 py-1 rounded ml-1">
              git push
            </code>
          </li>

          <li>
            Verify your changes on GitLab by visiting the repository's link.
            There should be an commit and the new file you added.
          </li>

          <div className="space-y-6">
            <div className="flex justify-center">
              <img
                src="../images/gitlab-tutorial-one.png"
                alt="GitLab Login"
                className="w-full max-w-xl rounded-lg shadow-lg"
              />
            </div>
            <div className="flex justify-center">
              <img
                src="../images/gitlab-tutorial-two.png"
                alt="GitLab Create Project"
                className="w-full max-w-xl rounded-lg shadow-lg"
              />
            </div>
            <div className="flex justify-center">
              <img
                src="../images/gitlab-tutorial-three.png"
                alt="GitLab Repository View"
                className="w-full max-w-xl rounded-lg shadow-lg"
              />
            </div>
          </div>
        </ol>
      </div>
    </div>
  );
};

export default GitLab;
