export let initialData = {
  list: ["list 1", "list 2", "list 3", "list 4"],
  todoList: [
    {
      id: 1,
      title: "Buy groceries",
      description: "Milk, Bread, Eggs, Butter, Cheese",
      dueDate: "2024-05-18",
      list: "list 1",
      isDone: true,
    },
    {
      id: 2,
      title: "Finish project report",
      description: "Complete the final report for the project and submit it",
      dueDate: "2024-05-18",
      list: "list 1",
      isDone: false,
    },
    {
      id: 3,
      title: "Book doctor's appointment",
      description:
        "Schedule an appointment with Dr. Smith for a regular check-up",
      dueDate: "2024-04-25",
      list: "list 1",
      isDone: true,
    },
    {
      id: 4,
      title: "Clean the house",
      description: "Vacuum, dust, and organize all rooms",
      dueDate: "2024-07-19",
      list: "list 2",
      isDone: false,
    },
    {
      id: 5,
      title: "Call the plumber",
      description: "Fix the leaking faucet in the kitchen",
      dueDate: "2024-05-15",
      list: "list 2",
      isDone: false,
    },
    {
      id: 6,
      title: "Prepare presentation",
      description: "Create slides for the upcoming meeting on Q2 results",
      dueDate: "2024-05-23",
      list: "list 2",
      isDone: true,
    },
  ],
  view: ["Today", "Upcoming", "Done"],
};

export const listViewCategory = [...initialData.view, ...initialData.list];
