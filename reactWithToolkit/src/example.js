// Esse código é apenas um exemplo da imutabilidade do estado
// Ele não vai ser utilizado para o funcionamento do projeto
const initialState = {
  user: {
    name: "Letícia",
    email: "leticia@example.com",
    preferences: {
      theme: "dark",
      notifications: true,
    },
  },
};

export function changeTheme(theme) {
  return { type: "CHANGE_THEME", payload: theme };
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return {
        ...state,
        user: {
            ...state.user,
            preferences: {
                ...state.user.preferences,
                theme: action.payload
            }
        }
      };
      // immer => eu escrevo do jeito de baixo 
      // e o immer converte pro jeito de cima
      state.user.preferences.theme = action.payload
    default:
      return state;
  }
};
