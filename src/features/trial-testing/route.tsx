import { Outlet } from "react-router-dom"
import { TrialTesting } from "../trial-testing/ui"
import TestController from "./ui/subject-test/TestController"
import InformationBlock from "./ui/subject-test/InformationBlock"
import TestFinish from "./ui/subject-test/TestFinish"
import TestPage from "./ui/subject-test"

export const TrialTestingRoute = {
  path: "trial-testing",
  element: <Outlet />,
  children: [
    {
      path: "",
      element: <TrialTesting />,
    },
    {
      path: ":testSubjectId",
      element: <TestPage />,
      children: [
        {
          path: "",
          element: <InformationBlock />,
        },
        {
          path: "testing",
          element: <TestController />,
        },
      ],
    },
    {
      path: "finish/:testId",
      element: <TestFinish />,
    },
  ],
}
