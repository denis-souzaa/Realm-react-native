import Realm from 'realm';

import RepositorySchema from '../schemas/RepositorySchema';

export default function getSchema() {
  return Realm.open({
    schema: [RepositorySchema],
  });
}
