import type { NextApiRequest, NextApiResponse } from 'next'
import type { SoftSkillsData } from 'types/backendTypes'

const allSoftSkills: SoftSkillsData[] = [
  {
    id: 1,
    name: 'Communication',
    description: 'At work, I had to report my progress continuously and I made a couple of presentations to the direction. In my projects and school, usually, I led teams, and always heard all my teammate´s opinions and tried to make sure that all of them had the points in the way they were agreed.',
    icon: 'https://cdn-icons-png.flaticon.com/512/745/745205.png'
  },
  {
    id: 2,
    name: 'Public Speech',
    description: 'I have recorded and streamed for years, made public speeches for projects and meetings, including elevator speech, always trying to be as the easiest way possible to understand it. Nowadays I like to teach and prepare presentations of any topic, I love to research and sometimes I draw to have some illustrations to make the speech.',
    icon: 'https://cdn-icons-png.flaticon.com/512/3893/3893280.png'
  },
  {
    id: 3,
    name: 'Tolerance',
    description: 'With the streaming, I started to know people from different countries and backgrounds, and with that, I´m open to learning and listening about different cultures. I´m also very open to new ideas and always try to understand the situation and the people around me.',
    icon: 'https://cdn-icons-png.flaticon.com/512/3113/3113454.png'
  },
  {
    id: 4,
    name: 'Teaching',
    description: 'With the pass of time, I figure out that the best way to learn was to teach; since the university, I liked to help my classmates to learn about what they had problems with. At work, if I could help teach others to improve their work I was there.',
    icon: 'https://cdn-icons-png.flaticon.com/512/2097/2097072.png'
  },
  {
    id: 5,
    name: 'Continuous Learning',
    description: 'The work is always improvable, and always there are new things to learn, I try to learn things that are valuable to my work and my life.',
    icon: 'https://cdn-icons-png.flaticon.com/512/4616/4616734.png'
  },
  {
    id: 6,
    name: 'Leadership',
    description: 'It was not my decision at the beginning, but with time I have learned how to make better decisions and be a better leader than I was. I liked to have all my team prepared and  happy and with that can have the work done and how it has to be.',
    icon: 'https://cdn-icons-png.flaticon.com/512/860/860430.png'
  },
  {
    id: 7,
    name: 'Teamwork',
    description: 'When I was younger I used to think that I could do everything by myself, nowadays I learned that everyone in a group knows something that I don´t and others can do some things better than I can do on my own, the group can go farther. I prefer to hear everyone´s ideas, there is always that can improve the work, no idea is bad.',
    icon: 'https://cdn-icons-png.flaticon.com/512/7505/7505604.png'
  },
  {
    id: 8,
    name: 'Creativity',
    description: 'As an entrepreneur, I like to think how things can be done, so with the knowledge of all my team can imagine how we can improve or do the work',
    icon: 'https://cdn-icons-png.flaticon.com/512/993/993515.png'
  },
  {
    id: 9,
    name: 'Entrepreneurship',
    description: 'I´m the kind of person that likes to create, have a solution that can improve a process or how can I do the things better done',
    icon: 'https://cdn-icons-png.flaticon.com/512/7172/7172299.png'
  },
  {
    id: 10,
    name: 'Emotional intelligence.',
    description: 'I learned this at the university, trying to do better with the conflicts and the different situations, but I prefer to talk about the problems to get solutions, and continue going on with the work.',
    icon: 'https://cdn-icons-png.flaticon.com/512/6679/6679575.png'
  },
  {
    id: 11,
    name: 'Organization',
    description: 'I´m a person who has a bad memory, the reason why I try to have all my organization in a technological tool. I don´t like to have issues under control, so I put it in software where I can remember everything and have everything at hand.',
    icon: 'https://cdn-icons-png.flaticon.com/512/4953/4953687.png'
  },
  {
    id: 12,
    name: 'Decisión Making',
    description: 'As an owner of my own business and usually being the leader on teams, I had to take a lot of decisions, of course, always with 2 factors in my mind. First, valuable information, most of all numerical and the experience and opinion of my team members',
    icon: 'https://cdn-icons-png.flaticon.com/512/4727/4727320.png'
  },
  {
    id: 13,
    name: 'Scheduling of Activities',
    description: 'With the point of organization, I try to have all the activities in a schedule, it helps me to measure the result of what I´m doing and correct it, before the time is over and to motivate myself to finish all my activities.',
    icon: 'https://cdn-icons-png.flaticon.com/512/3094/3094857.png'
  }
]

export default function handler (
  req: NextApiRequest,
  res: NextApiResponse<SoftSkillsData[]>
) {
  res.status(200).json(allSoftSkills)
}
