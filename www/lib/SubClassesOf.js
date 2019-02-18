// @flow

import React from 'react'
import subClassesOf from './getSubClassesOf'
import { List, ListHeader, ListItem } from 'semantic-ui-react'
import Link from '../component/Link'

type S = {
  id: string,
  subClassOf?: string,
}

const SubClassesOf = ({ subject }: { subject: S }) => {
  if (!subject) {
    return null;
  }
  let items = subClassesOf(subject.id);
  let listItems =
    items &&
    items.map(item => (
      <ListItem key={item.id}>
        <ListHeader>
          <Link name="types/view" params={{ id: item.id }}>{item.label}</Link>
        </ListHeader>
      </ListItem>
    ));
  return <List>{listItems}</List>;
};

export default SubClassesOf
