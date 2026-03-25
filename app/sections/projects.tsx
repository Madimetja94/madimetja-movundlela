export default function Projects(){
    return (
      <section id="projects" className="py-20 px-10">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border p-6 rounded-lg">
            <h3 className="font-bold text-xl">Computer Builder E-commerce</h3>
            <p className="mt-2">
              A full stack system allowing users to customize PCs.
            </p>
          </div>
          <div className="border p-6 rounded-lg">
            <h3 className="font-bold text-xl">HR Administration System</h3>
            <p className="mt-2">Employee and department management system.</p>
          </div>
          <div className="border p-6 rounded-lg">
            <h3 className="font-bold text-xl">Restaurant Web App</h3>
            <p className="mt-2">Menu and ordering web application.</p>
          </div>
        </div>
      </section>
    );
}