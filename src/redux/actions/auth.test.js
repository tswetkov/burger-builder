import { auth } from "../reducers/auth";

import { AUTH_SUCCESS } from "../actionTypes";

describe("auth reducer", () => {
  it("should return initial state", () => {
    expect(auth(undefined, {})).toEqual({
      token: null,
      userId: null,
      error: null,
      loading: false,
      authRedirectPath: "/"
    });
  });

  it("should store the token upon login", () => {
    expect(
      auth(
        {
          token: null,
          userId: null,
          error: null,
          loading: false,
          authRedirectPath: "/"
        },
        { type: AUTH_SUCCESS, idToken: "some-token", userId: "some-user-id" }
      )
    ).toEqual({
      token: "some-token",
      userId: "some-user-id",
      error: null,
      loading: false,
      authRedirectPath: "/"
    });
  });
});
