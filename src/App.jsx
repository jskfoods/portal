import { Fragment } from "react";
import AppAppBar from "./modules/views/AppAppBar";
import withRoot from "./modules/withRoot";
import AppFooter from "./modules/views/AppFooter";
import ProductCTA from "./modules/views/ProductCTA";
import ProductBenefits from "./modules/views/ProductBenefits";
import ProductHero from "./modules/views/ProductHero";
import ProductValues from "./modules/views/ProductValues";

function App() {
  return (
    <Fragment>
      <AppAppBar />
      <ProductHero />
      <ProductValues />
      <ProductBenefits />
      <ProductCTA />
      <AppFooter />
    </Fragment>
  );
}

export default withRoot(App);
