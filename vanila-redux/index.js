import { createStore } from 'redux'

const divToggle = document.querySelector('.toggle')
const counter = document.querySelector('.counter')
const btnIncrease = document.querySelector('#increase')
const btnDecrease = document.querySelector('#decrease')

const TOGGLE_SWITCH = 'TOGGLE_SWITCH'
const INCREASE = 'INCREASE'
const DECREASE = 'DECREASE'

const toggleSwitch = () => ({
  type: TOGGLE_SWITCH,
})
const increase = (diffrence) => ({
  type: INCREASE,
  diffrence,
})
const decrease = () => ({
  type: DECREASE,
})

const initialState = {
  toggle: false,
  counter: 0,
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_SWITCH':
      return {
        ...state,
        toggle: !state.toggle,
      }
    case 'INCREASE':
      return {
        ...state,
        counter: state.counter + action.diffrence,
      }
    case 'DECREASE':
      return {
        ...state,
        counter: state.counter - 1,
      }
    default:
      return state
  }
}

const store = createStore(reducer)

const render = () => {
  const state = store.getState()

  if (state.toggle) {
    divToggle.classList.add('active')
  } else {
    divToggle.classList.remove('active')
  }

  counter.innerText = state.counter
}

render()
store.subscribe(render)

const listener = () => {
  console.log('상태가 업데이트됨')
}

const unsubscribe = store.subscribe(listener)

unsubscribe()

divToggle.onclick = () => {
  store.dispatch(toggleSwitch())
}
btnIncrease.onclick = () => {
  store.dispatch(increase(1))
}
btnDecrease.onclick = () => {
  store.dispatch(decrease())
}
