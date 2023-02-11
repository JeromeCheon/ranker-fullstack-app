export interface Participants {
	[participantID: string]: string;
}

export interface Poll {
	id: string;
	topic: string;
	votesPerVoter: number;
	participants: Participants;
	adminID: string;
	// nominations: Nominations;
	// rankings: Rankings;
	// results: Results;
	hasStarted: boolean;
}

// 자, 이렇게 package.json, tsconfig, poll-types 까지 생성해줬으면
// 얘네를 export 시켜줄 index 파일이 필요해;
