import type {LinksFunction, MetaFunction} from "@remix-run/node";
import {Alert, Box, Heading, Page,} from "@navikt/ds-react";
import navStyles from "@navikt/ds-css/dist/index.css";
import {isRouteErrorResponse, useRouteError} from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    {title: "Admin Portal Dashboard"},
    {name: "description", content: "Welcome to Remix!"},
  ];
};
export const links: LinksFunction = () => [
  {rel: "stylesheet", href: navStyles}
];

export default function Dashboard() {

  return (
      <>

        <Page.Block gutters width="lg" >

          <Heading size="large">Hello world!!</Heading>

        </Page.Block>
      </>
  );
}


