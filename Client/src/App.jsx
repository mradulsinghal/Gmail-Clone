// import Main from "./pages/Main";
// import { lazy, Suspense  } from "react";
// import { Route,BrowserRouter,RouterProvider , createRoutesFromElements, createBrowserRouter} from "react-router-dom";
// import { routes } from "./constants/routes";
// const Errorcomponent = lazy(()=> import('./common/Errorcomponent'))

// const router = createBrowserRouter(
// createRoutesFromElements(
//   <Route>
//     <Route path={routes.main.path} Navigate to = {`${routes.emails.path}/inbox`}/>
//     <Route path={`${routes.main.path}`} element= {<routes.main.element/>}>
// <Route path={`${routes.emails.path}:type`} element = {<routes.emails.element/>} errorElement= {<Errorcomponent/>}/> 
//     </Route>
//   </Route>
// )

// )




// function App() {
//   return (<div >
//     <Main/>
//     </div>
//   );
// }

// export default App;
//////////////// new onw 
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";

import { lazy, Suspense } from "react";
import SuspenseLoader from "./components/SuspenseLoader";

// lazy imports
const Main = lazy(() => import("./pages/Main"));
const Emails = lazy(() => import("./components/Emails"));
const ViewEmail = lazy(() => import("./components/ViewEmail"));
const Errorcomponent = lazy(() => import("./common/Errorcomponent"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main />} errorElement={<Errorcomponent />}>
      <Route index element={<Navigate to="/emails/inbox" />} />
      <Route path="/emails/:type" element={<Emails />} />
      <Route path="/view" element={<ViewEmail />} />
    </Route>
  )
);

function App() {
  return (
    <Suspense fallback={<SuspenseLoader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;


// new one 



// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import Main from "./pages/Main";
// import Emails from "./components/Emails";
// import ViewEmail from "./components/ViewEmail";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Main />}>
//           <Route index element={<Navigate to="/emails/inbox" />} />
//           <Route path="emails/:type" element={<Emails />} />
//           <Route path="view" element={<ViewEmail />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;