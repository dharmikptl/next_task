const express = require("express");
const app = express();
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");
const { time, timeStamp } = require("console");
const prisma = new PrismaClient();
app.use(express.json());
app.use(cors());

app.get("/user", async (req, res) => {
  // console.log('called')
  const userData = await prisma.users.findMany();
  res.json(userData);
});

app.get("/user/:id", async (req, res) => {
  // console.log('called')
  const userData = await prisma.users.findFirst({
    where: {
      id: parseInt(req.params.id),
    },
  });
  res.json(userData);
});

app.get("/movie/:id", async (req, res) => {
  // console.log('called')
  const userData = await prisma.movies.findFirst({
    where: {
      id: parseInt(req.params.id),
    },
  });
  res.json(userData);
});

app.post("/addmovie", async (req, res) => {
  const addMovie = await prisma.movies.create({
    data: {
      imgSRc: req.body.imgSrc,
      duration: new Date(req.body.duration),
      realesedate: new Date(req.body.realesedate),
      director: req.body.director,
      describtion: req.body.desc,
      title: req.body.title,
    },
  });
  if (addMovie) {
    res.send("create");
  } else {
    res.send("Not created");
  }
});

app.post("/addtheater", async (req, res) => {
  const addtheater = await prisma.theater.create({
    data: {
      contact: req.body.contact,
      location: req.body.location,
      name: req.body.name,
      seatingCapacity: req.body.capacity,
    },
  });
  if (addtheater) {
    res.send("create");
  } else {
    res.send("not create");
  }
});

app.post("/addshow", async (req, res) => {
  const gettheater = await prisma.theater.findFirst({
    where: {
      AND: [
        {
          contact: req.body.contact,
          name: req.body.theaterName,
        },
      ],
    },
  });
  const getmovie = await prisma.movies.findFirst({
    where: {
      title: req.body.movieName,
    },
  });
  const addshow = await prisma.showtime.create({
    data: {
      availibility: req.body.ava,
      date: new Date(req.body.date),
      theaterID: gettheater.id,
      movieID: getmovie.id,
    },
  });
  if (addshow) {
    res.send("addshow");
  } else {
    res.send("not addshow");
  }
});

app.post("/userinsert", async (req, res) => {
  const userin = await prisma.users.create({
    data: {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      contact: req.body.contact,
    },
  });
  if (userin) {
    res.send("inserted");
  } else {
    res.send("not inserted");
  }
});

app.patch("/userupdate", async (req, res) => {
  const userupdate = await prisma.users.update({
    where: {
      id: req.body.id,
    },
    data: {
      contact: req.body.contact,
    },
  });

  if (userupdate) {
    res.send(userupdate);
  } else {
    res.send("not update");
  }
});

app.delete("/deleteuser", async (req, res) => {
  const deleteUser = await prisma.users.delete({
    where: {
      id: req.body.id,
    },
  });
  if (deleteUser) {
    res.send(deleteUser);
    res.send("user Deleted");
  } else {
    res.send("Not Deleted");
  }
});

app.post("/booking", async (req, res) => {
  const userdata = await prisma.users.findFirst({
    where: {
      email: req.body.email,
    },
  });
  const showtime = await prisma.showtime.findFirst({
    where: {
      date: new Date(req.body.showDate),
    },
  });
  const bookinsert = await prisma.booking.create({
    data: {
      id: req.body.id,
      userID: userdata.id,
      showtimeID: showtime.id,
      number_tickets: req.body.number_tickets,
      total_cost: req.body.total_cost,
    },
  });
  if (bookinsert) {
    res.send("insert");
  } else {
    res.send("not insert");
  }
});

app.get("/userbook", async (req, res) => {
  const userbook = await prisma.booking.findMany({
    include: {
      userbook: true,
      boshow: {
        include: {
          movie: true,
        },
      },
    },
  });
  res.send(userbook);
});
app.listen(3500, () => {
  console.log("Server Start");
});
