module.exports = {
    secret: "atiqur@132",
    port: 3000,
    url: "",
    metrics: [
        { method: "POST", page: "/admin", admin: true, customer: false },
        { method: "PATCH", page: "/admin", admin: true, customer: false },
        { method: "PATCH", page: "/admin", admin: true, customer: false },
        { method: "DELETE", page: "/admin", admin: true, customer: false },
        { method: "GET", page: "/admin", admin: true, customer: false },

        { method: "POST", page: "/customer", admin: true, customer: false },
        { method: "PATCH", page: "/customer", admin: true, customer: true },
        { method: "PATCH", page: "/customer", admin: true, customer: false },
        { method: "DELETE", page: "/customer", admin: true, customer: false },
        { method: "GET", page: "/customer", admin: true, customer: true },


        { method: "POST", page: "/delivered", admin: true, customer: false },
        { method: "PATCH", page: "/delivered", admin: true, customer: false },
        { method: "PATCH", page: "/delivered", admin: true, customer: false },
        { method: "DELETE", page: "/delivered", admin: true, customer: false },
        { method: "GET", page: "/delivered", admin: true, customer: false },



        { method: "POST", page: "/ordered", admin: true, customer: false },
        { method: "PATCH", page: "/ordered", admin: true, customer: false },
        { method: "PATCH", page: "/ordered", admin: true, customer: false },
        { method: "DELETE", page: "/ordered", admin: true, customer: false },
        { method: "GET", page: "/ordered", admin: true, customer: true },


        { method: "POST", page: "/notification", admin: true, customer: false },
        { method: "PATCH", page: "/notification", admin: true, customer: false },
        { method: "PATCH", page: "/notification", admin: true, customer: false },
        { method: "DELETE", page: "/notification", admin: true, customer: false },
        { method: "GET", page: "/notification", admin: true, customer: true },
    ]
}