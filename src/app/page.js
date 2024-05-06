'use client';

export default function Home() {

  const students = [
    {
      "id": 1,
      "name": "first student",
      "marks": 80
    },
    {
      "id": 2,
      "name": "second student",
      "marks": 70
    },
    {
      "id": 3,
      "name": "third student",
      "marks": 60
    },
    {
      "id": 4,
      "name": "fourth student",
      "marks": 50
    },
    {
      "id": 5,
      "name": "fifth student",
      "marks": 40
    },
    {
      "id": 6,
      "name": "sixth student",
      "marks": 30
    }
  ]

  const passStudents = [];
  const failStudents = [];


  const handleReset = () => {
    alert("Handle Reset Function")
  }

  return (
    <main>
      <div className="m-12">
        <div className="text-center">
          <h2 className="text-2xl">Students List</h2>
        </div>
        <div className="columns-2 my-5 flex justify-center">
          <div className="mx-3">
            <h3>Box 1</h3>
            <div>test1</div>
            <div>test1</div>
            <div>test1</div>
            <div>test1</div>
          </div>
          <div className="mx-3">
            <h3>Box 2</h3>
            <div>test2</div>
            <div>test2</div>
            <div>test2</div>
            <div>test2</div>
          </div>
        </div>

        <div className="flex justify-center">
          <button className="bg-red-900 text-slate-50 px-3 py-2 rounded-md" onClick={() => handleReset()}>
            Reset
          </button>
        </div>
      </div>
    </main>
  );
}
