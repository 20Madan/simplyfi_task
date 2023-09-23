function findSonRoute() {
    const travelPlan = [
      "Paris-Skopje", "Zurich-Amsterdam", "Prague-Zurich",
      "Barcelona-Berlin", "Kiev-Prague", "Skopje-Paris",
      "Amsterdam-Barcelona", "Berlin-Kiev", "Berlin-Amsterdam"
    ];
  
    const citiesVisited = ["Amsterdam", "Kiev", "Zurich", "Prague", "Berlin", "Barcelona"];
  
    const graph = {};
  
    citiesVisited.forEach(city => {
      graph[city] = [];
    });
  
    travelPlan.forEach(ticket => {
      const [from, to] = ticket.split('-');
      
      if (graph[from] && graph[to]) {
        graph[from].push(to);
      }
    });
  
    function dfs(city, visited, route) {
      visited.add(city);
      route.push(city);
  
      const neighbors = graph[city];
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          dfs(neighbor, visited, route);
        }
      }
    }
  
    const startCity = "Kiev";
    const visitedCities = new Set();
    const sonRoute = [];
  
    dfs(startCity, visitedCities, sonRoute);
  
    return sonRoute.join(" -> ");
  }
  
  const sonRoute = findSonRoute();
  console.log("Son's Travel Route:", sonRoute);

  //out-put of console is 
  //Son's Travel Route: Kiev -> Prague -> Zurich -> Amsterdam -> Barcelona -> Berlin 