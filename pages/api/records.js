import { sendMethodNotAllowed, sendOk } from '@/utils/apiMethods.js';
import { getCollection } from "@/utils/functions";
import { ObjectId } from 'mongodb';

const COLLECTION_NAME = 'flowers'; 

const getFlowers = async () => {
  const collection = await getCollection(COLLECTION_NAME);
  return collection.find({}).toArray();
};

const getFlower = async (id) => {
  const collection = await getCollection(COLLECTION_NAME);
  return collection.findOne({ _id: ObjectId.createFromHexString(id) });
};

const postFlower = async (flower) => {
  const collection = await getCollection(COLLECTION_NAME);
  return collection.insertOne(flower);
};

const putFlower = async (flower) => {
  const collection = await getCollection(COLLECTION_NAME);
  const id = flower._id;
  delete flower._id;
  return collection.updateOne({ _id: new ObjectId(id) }, { $set: flower });
};

const deleteFlower = async (id) => {
  const collection = await getCollection(COLLECTION_NAME);
  return collection.deleteOne({ _id: new ObjectId(id) });
};

export default async function handler(req, res) {
  const isAllowedMethod = req.method === 'GET' || req.method === 'POST' || req.method === 'PUT' || req.method === 'DELETE';
  if (!isAllowedMethod) {
    return sendMethodNotAllowed(res);
  }

  if (req.method === 'GET' && req.query.id) {
    const id = req.query.id;
    const flower = await getFlower(id);
    return sendOk(res, flower);
  } else if (req.method === 'GET') {
    const flowers = await getFlowers();
    return sendOk(res, flowers);
  } else if (req.method === 'POST') {
    const flower = req.body;
    const result = await postFlower(flower);
    return sendOk(res, result);
  } else if (req.method === 'PUT') {
    const flower = req.body;
    const result = await putFlower(flower);
    return sendOk(res, result);
  } else if (req.method === 'DELETE') {
    const id = req.query.id;
    const result = await deleteFlower(id);
    return sendOk(res, result);
  }
}