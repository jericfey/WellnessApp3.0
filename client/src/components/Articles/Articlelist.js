import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Grid, Container, List } from "semantic-ui-react";

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
    <Container>
      <Grid divided="vertically" floated="center" textAlign="center">
        <Grid.Row>
          <Grid.Column>
            <Card>
              <Card.Content>
                <Card.Header textAlign="left" className="todo">
                  Health & Wellness Articles:
                </Card.Header>
              </Card.Content>
              <Card.Content textAlign="left">
                <div className="article-list">
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
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}

export default Articlelist;
