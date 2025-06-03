const studentsDatabase = ["jordan", "erick", "john", "michael"];

const findStudent = (allStudent: string[], studentName: string) => {
  for (let i = 0; i < allStudent.length; i++) {
    if (allStudent[i] === studentName) {
      console.log(`Found ${studentName}`);
    }
  }
};

findStudent(studentsDatabase, "erick");
