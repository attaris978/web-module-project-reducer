import React, { useReducer } from "react";
import Reducer, { initialState } from "../reducers";

import {
  APPLY_NUMBER,
  applyNumber,
  CHANGE_OPERATION,
  STORE_NUMBER,
  RESET,
} from "../actions";

import "./App.css";

import TotalDisplay from "./TotalDisplay";
import CalcButton from "./CalcButton";

function App() {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          {" "}
          Reducer Challenge
        </a>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton
                value={"M+"}
                onClick={(e) =>
                  dispatch({
                    type: STORE_NUMBER,
                    payload: state.total,
                  })
                }
              />
              <CalcButton
                value={"MR"}
                onClick={(e) => dispatch(applyNumber(state.memory))}
              />
              <CalcButton
                value={"MC"}
                onClick={(e) =>
                  dispatch({
                    type: STORE_NUMBER,
                    payload: 0,
                  })
                }
              />
            </div>

            <div className="row">
              <CalcButton
                value={1}
                onClick={(e) => dispatch(applyNumber(e.target.value))}
              />
              <CalcButton
                value={2}
                onClick={(e) => dispatch(applyNumber(e.target.value))}
              />
              <CalcButton
                value={3}
                onClick={(e) => dispatch(applyNumber(e.target.value))}
              />
            </div>

            <div className="row">
              <CalcButton
                value={4}
                onClick={(e) => dispatch(applyNumber(e.target.value))}
              />
              <CalcButton
                value={5}
                onClick={(e) => dispatch(applyNumber(e.target.value))}
              />
              <CalcButton
                value={6}
                onClick={(e) => dispatch(applyNumber(e.target.value))}
              />
            </div>

            <div className="row">
              <CalcButton
                value={7}
                onClick={(e) => dispatch(applyNumber(e.target.value))}
              />
              <CalcButton
                value={8}
                onClick={(e) => dispatch(applyNumber(e.target.value))}
              />
              <CalcButton
                value={9}
                onClick={(e) => dispatch(applyNumber(e.target.value))}
              />
            </div>

            <div className="row">
              <CalcButton
                value={"+"}
                onClick={(e) =>
                  dispatch({
                    type: CHANGE_OPERATION,
                    payload: e.target.value,
                  })
                }
              />
              <CalcButton
                value={"*"}
                onClick={(e) =>
                  dispatch({
                    type: CHANGE_OPERATION,
                    payload: e.target.value,
                  })
                }
              />
              <CalcButton
                value={"-"}
                onClick={(e) =>
                  dispatch({
                    type: CHANGE_OPERATION,
                    payload: e.target.value,
                  })
                }
              />
            </div>

            <div className="row ce_button">
              <CalcButton
                value={"CE"}
                onClick={(e) =>
                  dispatch({
                    type: RESET,
                  })
                }
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
