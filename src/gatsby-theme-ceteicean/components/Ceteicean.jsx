import React from "react"
import Ceteicean from "gatsby-theme-ceteicean/src/components/Ceteicean"
import {
  Tei,
  TeiHeader,
  Ref,
  Graphic,
  List,
  Ptr,
  Note
} from "gatsby-theme-ceteicean/src/components/DefaultBehaviors"

import {Link} from "gatsby"

import Paper from "@mui/material/Paper"
import Layout from "../../components/layout"
import Typography from "@mui/material/Typography"

export default function MicroEditionCeteicean({pageContext}) {

  const routes = {
    "tei-tei": Tei,
    "tei-teiheader": TeiHeader,
    "tei-ref": Ref,
    "tei-graphic": Graphic,
    "tei-list": List,
    "tei-ptr": Ptr,
    "tei-note": Note
  }

  return(
    <Layout location="TEI">
        <Ceteicean pageContext={pageContext} routes={routes} />
        <Paper elevation={1} sx={{padding: '.7em 0 0 1em'}}>
          <Typography variant="body2">
            <Link to={pageContext.publicURL} download>See original TEI.</Link>
          </Typography>
        </Paper>
    </Layout>
  )

}
