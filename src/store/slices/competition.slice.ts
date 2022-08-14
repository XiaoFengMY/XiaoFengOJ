import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '..';

export interface CompetitionState {
  href: string;
  title: string;
  tags: string[];
  duration: string;
  participants: number;
  startTime: string;
}

const initialState: CompetitionState[] = [
  {
    href: 'https://ant.design',
    title: `愚人节比赛s`,
    tags: ['数据结构', '动态规划'],
    duration: '4小时',
    participants: 22,
    startTime: '2022-12-14',
  },
  {
    href: 'https://ant.design',
    title: `愚人节比赛`,
    tags: ['数据结构', '动态规划'],
    duration: '4小时',
    participants: 22,
    startTime: '2022-12-14',
  },
];

const competitionSlice = createSlice({
  name: 'competition',
  initialState,
  reducers: {},
});

export const selectCompetition = (state: RootState) => state.competitions;
export default competitionSlice.reducer;
