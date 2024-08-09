function Graph(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];

    for(let i = 0; i < this.vertices; i++) {
        this.adj[i] = [];
        this.adj[i].push("");
    }

    this.addEdge = addEdge;
    this.showGraph = showGraph;
}

Graph.prototype.addEdge = function(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
}

Graph.prototype.showGraph = function() {
    for(let i = 0; i < this.vertices; i++) {
        let vertex = i + " -> ";
        let edges = "";
        for(let j = 0; j < this.vertices; j++) {
            if(this.adj[i][j] != undefined) {
                edges += this.adj[i][j] + " ";
            }
        }
        console.log(`${vertex}${edges}`);
    }
}

// Usage
const g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.showGraph();

//Output
// 0 -> 1 2
// 1 -> 0 3
// 2 -> 0 4
// 3 -> 1
// 4 -> 2