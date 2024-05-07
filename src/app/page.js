

import StudentsTable from "@/components/StudentsTable";


export default async function Home() {
  
  return (
    <main>
      <div className="mx-12 my-6">
        <div className="text-center mb-10 border-b">
          <h2 className="text-2xl">Students List</h2>
        </div>
        
        <StudentsTable />

      </div>
    </main>
  );
}
