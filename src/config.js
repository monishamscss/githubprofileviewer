import React, { Component } from 'react';

const URL = "https://api.github.com/"

export default {
    search: URL + "search/users?q=",
    bio: URL + "users/",
    repo: "/repos"
}
