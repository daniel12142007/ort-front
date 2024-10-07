import { Outlet } from "react-router-dom"
import { TrialTesting } from "../trial-testing/ui"
import TestController from "./ui/subject-test/TestController"
import InformationBlock from "./ui/subject-test/InformationBlock"
import TestFinish from "./ui/test-finish/TestFinish"

export const TrialTestingRoute = {
  path: "trial-testing",
  element: <Outlet />,
  children: [
    {
      path: "",
      element: <TrialTesting />,
    },
    {
      path: ":testSubject",
      element: <Outlet />,
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
      path: "finish",
      element: <TestFinish />,
    },
  ],
}
