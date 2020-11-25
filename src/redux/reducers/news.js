import { CREATE_NEWS, PUBLIS_NEWS, DELETE_NEWS } from "../constants";

const initialState = [
  {
    title: "Это очень важная новость!",
    text: "В мире все хорошо, желаем чтобы и у вас было также",
    createdBy: "admin",
    createdTime: new Date(2020, 10, 25).toLocaleString("ru"),
    id: 1,
    published: true,
  },
  {
    title: "Заголовок новости!",
    text: "Текст новости для наполнения",
    createdBy: "admin",
    createdTime: new Date(2020, 10, 25).toLocaleString("ru"),
    id: 2,
    published: false,
  },
];

export default function news(state = initialState, action) {
  switch (action.type) {
    case CREATE_NEWS:
      return [...state, action.news];
    case PUBLIS_NEWS:
      return state.map((el) => ({
        ...el,
        published: action.id === el.id ? true : el.published,
      }));
    case DELETE_NEWS:
      return state.filter((el) => el.id !== action.id);
    default:
      return state;
  }
}
