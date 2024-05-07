

import StudentsTable from "@/components/StudentsTable";


export default async function Home() {
  
  return (
    <main>
      <div className="mx-12 mt-6">
        <div className="text-center mb-10 border-b">
          <h2 className="text-2xl font-light">Students List</h2>
        </div>
        
        <StudentsTable />

      </div>
    </main>
  );
}
