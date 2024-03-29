import { Request } from 'express';
import { Nomination } from 'shared';
import { Socket } from 'socket.io';

// service types for such as createPoll, joinPoll
export type CreatePollFields = {
  topic: string;
  votesPerVoter: number;
  name: string;
};

export type JoinPollFields = {
  pollID: string;
  name: string;
};

export type RejoinPollFields = {
  pollID: string;
  userID: string;
  name: string;
};

export type AddParticipantFields = {
  pollID: string;
  userID: string;
  name: string;
};

export type AddNominationFields = {
  pollID: string;
  userID: string;
  text: string;
};

// repository types
export type CreatePollData = {
  pollID: string;
  topic: string;
  votesPerVoter: number;
  userID: string;
};

export type AddParticipantData = {
  pollID: string;
  userID: string;
  name: string;
};

export type AddNominationData = {
  pollID: string;
  nominationID: string;
  nomination: Nomination;
};

export type RemoveParticipantData = {
  pollID: string;
  userID: string;
};

// guard types
export type AuthPayload = {
  userID: string;
  pollID: string;
  name: string;
};

export type RequestWithAuth = Request & AuthPayload;
export type SocketWithAuth = Socket & AuthPayload;
