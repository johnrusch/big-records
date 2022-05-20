// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Order, Item } = initSchema(schema);

export {
  Order,
  Item
};