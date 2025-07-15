import { useRouter } from 'next/router';
import Image from 'next/image';
import { projectsItems } from '../../data';
import { useEffect } from 'react'; // Import useEffect

const ProjectPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Add a state to manage the project once it's found
  // This is a good practice if you want to perform actions *after* the project is loaded
  // For this simple case, just checking router.isReady is often enough.
  // const [project, setProject] = useState(null);

  // Use useEffect to react when router.isReady becomes true
  useEffect(() => {
    if (!router.isReady) {
      return; // router.query is not yet populated
    }

    // Now that router.isReady is true, slug should be available
    const foundProject = projectsItems.find(p => p.slug === slug);
    // If you were using state: setProject(foundProject);

    // If no project is found, you might want to redirect or show a 404.
    // For this example, we'll let the initial return handle it.
  }, [router.isReady, slug]); // Depend on router.isReady and slug

  // Conditionally render based on router.isReady
  if (!router.isReady) {
    // You can show a loading indicator here
    return <div className="bg-gray-800 min-h-screen p-10 text-gray-200">Loading project...</div>;
  }

  // After router.isReady is true, re-find the project
  const project = projectsItems.find(p => p.slug === slug);

  if (!project) {
    // If the project is still not found after router.isReady, it means the slug was invalid
    return <div className="bg-gray-800 min-h-screen p-10 text-red-600"><h1>Project not found!</h1></div>;
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
        priority
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