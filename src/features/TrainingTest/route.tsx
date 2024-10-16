import { Outlet } from "react-router-dom";
import { TrainingTest } from "./ui";
import { QuestionComponent } from "./ui/QuestionList";

export const TrainingTestRoute = {
  path: 'training-test',
  element: <Outlet/>,
  children: [
    {
      path: '',
      element: <TrainingTest />
    },
    {
      path: ':subjectName',
      element: <QuestionComponent />
    }
  ]
}
