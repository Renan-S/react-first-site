import React, { ChangeEvent } from "react";

const Student = () => {
  const [data, setData] = React.useState<IStudent>({
    student: "Renan",
    grades: [
      { subject: "History", grade: 5 },
      { subject: "Science", grade: 7 },
      { subject: "Math", grade: 10 },
      { subject: "Sociology", grade: 2 },
      { subject: "Arts", grade: 4 },
    ],
    college: false,
  });
  const [gradeState, setGradeState] = React.useState("");

  const changeStudentName = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setData({
      ...data,
      student: value,
      college: value === "Roberto" ? true : false,
    });
  };

  const changeStudentGrade = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setGradeState(value);
  };

  const setNewSubjectGrade = () => {
    setData({ ...data, grades: [...data.grades, parseString(gradeState)] });
  };

  const parseString = (
    inputValue: string
  ): { subject: string; grade: number } => {
    const satinized = inputValue.split(":");
    return { subject: satinized[0], grade: +satinized[1] };
  };

  return (
    <div>
      <input
        style={{ marginTop: "3rem" }}
        id={data.student}
        type="text"
        name="Student"
        value={data.student}
        placeholder="Congrats Roberto!"
        onChange={changeStudentName}
      ></input>
      <input
        style={{ marginTop: "3rem" }}
        id={data.student}
        type="text"
        name="Grade"
        value={gradeState}
        placeholder="Set your subject and grade here. EX - PE: 10"
        onChange={changeStudentGrade}
      ></input>
      <ul>
        {data.grades.map(({ subject, grade }, index) => (
          <li key={index}>
            {subject}: {grade}
          </li>
        ))}
      </ul>
      <p hidden={!data.college}>Congratulations on your degree!</p>
      <button onClick={setNewSubjectGrade}>Set new subject/grade</button>
    </div>
  );
};

type IStudent = {
  student: string;
  grades: { subject: string; grade: number }[];
  college?: boolean;
};

export default Student;
