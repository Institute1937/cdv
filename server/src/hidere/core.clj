(ns hidere.core
  (:gen-class))

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Hello, World!"))

(defn now [] (java.util.Date.))

(defn current-time [request]
  {:status 200
   :headers {"Content-Type" "text/plain"}
   :body (str (now))})


(use 'ring.adapter.jetty)

(run-jetty current-time {:port 3009})