// Code your solution in this file

function findMatching(drivers, string) { 
  return drivers.filter(function(name) {
    return string.toUpperCase() === name.toUpperCase(); 
  });
}

function findMatching(drivers, string) 