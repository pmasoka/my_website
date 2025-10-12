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

  // Detect if description contains HTML (like <a> tag)
  const containsHTML = /<a\s+href=/.test(project.description);

  return (
    <div className="bg-gray-800 min-h-screen p-10">
      <h1 className="text-red-600 text-4xl">{project.title}</h1>

      <Image
        src={project.image}
        alt={project.title}
        className="rounded-lg my-8"
        width={500}
        height={300}
        priority
      />

      {/* Description — supports HTML links if present */}
      {containsHTML ? (
        <p
          className="text-gray-200 leading-relaxed [&>a]:text-blue-400 [&>a]:underline [&>a:hover]:text-blue-300 [&>a:hover]:underline"
          dangerouslySetInnerHTML={{ __html: project.description }}
        />
      ) : (
        <p className="text-gray-200 leading-relaxed">{project.description}</p>
      )}

      {/* Technologies */}
      <div className="mt-8">
        <h2 className="text-2xl text-red-600 font-semibold">
          Technologies Used:
        </h2>
        <ul className="mt-2 list-disc pl-5 text-gray-200">
          {project.languages.map((language, index) => (
            <li key={index}>{language}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectPage;
