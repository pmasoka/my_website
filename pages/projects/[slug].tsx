import { useRouter } from "next/router";
import Image from "next/image";
import { projectsItems } from "../../data";
import { useEffect } from "react";

const ProjectPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (!router.isReady) return;
    const foundProject = projectsItems.find((p) => p.slug === slug);
    if (!foundProject) {
      console.warn("Project not found for slug:", slug);
    }
  }, [router.isReady, slug]);

  if (!router.isReady) {
    return (
      <div className="bg-gray-800 min-h-screen p-10 text-gray-200">
        Loading project...
      </div>
    );
  }

  const project = projectsItems.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="bg-gray-800 min-h-screen p-10 text-red-600">
        <h1>Project not found!</h1>
      </div>
    );
  }

  const containsHTML = /<a\s+href=/.test(project.description);

  return (
    <div className="bg-gray-800 min-h-screen p-5 sm:p-10">
      {/* Project Title */}
      <h1 className="text-red-600 text-3xl sm:text-4xl break-words">
        {project.title}
      </h1>

      {/* Project Image (Responsive & Centered) */}
      {project.image && (
        <div className="flex justify-center my-8">
          <Image
            src={project.image}
            alt={`Image for ${project.title}`}
            className="rounded-lg w-full max-w-3xl h-auto object-contain"
            width={700}
            height={400}
            priority
          />
        </div>
      )}

      {/* Description — supports HTML links if present */}
      {containsHTML ? (
        <p
          className="text-gray-200 leading-relaxed break-words overflow-hidden 
                     [&>a]:text-blue-400 [&>a]:underline [&>a:hover]:text-blue-300 
                     [&>a:hover]:underline [&>a]:break-words [&>a]:inline-block 
                     [&>a]:max-w-full"
          dangerouslySetInnerHTML={{ __html: project.description }}
        />
      ) : (
        <p className="text-gray-200 leading-relaxed break-words">
          {project.description}
        </p>
      )}

      {/* Technologies Used */}
      <div className="mt-8">
        <h2 className="text-2xl text-red-600 font-semibold">
          Technologies Used:
        </h2>
        <ul className="mt-2 list-disc pl-5 text-gray-200 space-y-1">
          {project.languages.map((language, index) => (
            <li key={index}>{language}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectPage;
