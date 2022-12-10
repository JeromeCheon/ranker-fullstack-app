// package.json 에 보면 nanoid 라는 패키지가 있는데 이걸 사용해서
// id를 생성할 거야

import { customAlphabet, nanoid } from 'nanoid';

export const createPollID = customAlphabet(
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  6,
);

export const createUserID = () => nanoid();
export const createNominationID = () => nanoid(8);
