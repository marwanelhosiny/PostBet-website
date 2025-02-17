import { lazy } from "react";

export const Application = lazy(() => import("./Application"));
export const Home = lazy(() => import("./Home/Home"));
export const Support = lazy(() => import("./Support/Support"));
export const About = lazy(() => import("./About/About"));
export const PrivcyPolicy = lazy(() => import("./PrivcyPolicy/PrivcyPolicy"));
export const TermsAndConditions = lazy(() => import("./TermsAndConditions/TermsAndConditions"));
export const Feature = lazy(() => import("./Feature/Feature"));
export const FooterComponent = lazy(() =>
  import("../components/Footer/Footer")
);
export const HeaderComponent = lazy(() =>
  import("../components/Header/Header")
);
