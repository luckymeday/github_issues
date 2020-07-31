import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import Moment from 'react-moment'

const IssueList = ({ issues }) => {
  return (
    <div>
      {issues.map((issue) => (
        <IssueDetail key={issue.id} issue={issue} />
      ))}
    </div>
  );
};


const IssueDetail = ({ issue }) => {

  return (
    < div >



      <Card style={{ width: '60rem' }}>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <h4></h4>
            <img src={issue.user.avatar_url} width="80px"></img>
            <h4>#{issue.number}</h4>
            <h4>{issue.title}</h4>
            <h4>@{issue.user.login}</h4>
            <p><Moment parse="YYYY-MM-DDHH:mm" fromNow> {issue.updated_at.slice(0, -4)} </Moment></p>
            <h4>{issue.comment}</h4>
            <h4>{issue.body.substring(0, 100)}...</h4>

          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div >
  )
};

export default IssueList;
