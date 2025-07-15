import { useRouter } from 'next/router';
import Image from 'next/image';
import { projectsItems } from '../../data';

const ProjectPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const project = projectsItems.find(p => p.slug === slug);

  if (!project) {
    return <h1>Project not found!</h1>;
  }

  return (
    <div className="bg-gray-800 min-h-screen p-10">
      <h1 className="text-red-600 text-4xl">{project.title}</h1>
      <Image
        src={project.image}
        alt={project.title}
        className="rounded-lg my-8"
        width={500}
        height={300}
        priority // I Added this property to indicate priority
      />
      <p className="text-gray-200">{project.description}</p>

      {/* Display the languages */}
      <div className="mt-8">
        <h2 className="text-2xl text-red-600 font-semibold">Technologies Used:</h2>
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
