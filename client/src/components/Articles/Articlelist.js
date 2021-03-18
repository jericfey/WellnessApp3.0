import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Grid, Container, List, Header } from "semantic-ui-react";
import { Segment } from "semantic-ui-react";

function Articlelist() {
  const [articles, setArticles] = useState([]);
  const apiUrl =
    "https://health.gov/myhealthfinder/api/v3/topicsearch.json?categoryId=24,21";

  useEffect(() => {
    loadArticles();
  }, []);

  function loadArticles() {
    axios
      .get(apiUrl)
      .then((res) => {
        setArticles(res.data.Result.Resources.Resource);
        // console.log(res.data.Result.Resources.Resource);

        // const articles = res.data;
        // return articles.map((article) => {
        //   return {
        //     title: article.Result.Resources.Resource.Title.value,
        //     image: article.Result.Resources.Resource.ImageUrl.value,
        //     url: article.Result.Resources.Resource.AccessibleVersion.value,
        //   };
        // });
      })
      .catch((err) => console.log(err));
  }

  return (
    <Segment floated="right" className="article">
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Header
              textAlign="left"
              as="h3"
              textAlign="center"
              style={{ color: "black" }}
            >
              Health & Wellness Articles:
            </Header>
            <List ordered>
              <div className="article-list" textAlign="left">
                {articles.map((article, index) => {
                  return (
                    <List link key={index}>
                      <List.Item
                        as="a"
                        content={article.Title}
                        href={article.AccessibleVersion}
                        target="_blank"
                      />
                    </List>
                  );
                })}
              </div>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default Articlelist;
