"use strict";
try {
    await fetch('http://example.com');
  } catch(err) {
    alert(err); // Failed to fetch
}