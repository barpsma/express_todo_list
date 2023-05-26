const db = require("../models");

const getTodos = async (req, res) => {
  const userid = req.userid;
  db.Todo.findAll({
    where: { id_user: userid },
  })
    .then((Todo) => {
      res.status(200).json(Todo);
    })
    .catch((error) => {
      res.status(400).json({
        message: "tidak ada",
        error: error,
      });
    });
};

const createTodo = async (req, res) => {
  const userid = req.userid;
  const { title } = req.body;
  //mencari apakah todo sudah terdaftar di db
  const nameTodo = await db.Todo.findOne({
    where: {
      title: title,
    },
  });
  //jika  sudah ada
  if (nameTodo) {
    return res.status(400).json({
      status: false,
      message: "todo sudah ada",
    });
  }

  db.Todo.create({
    id_user: userid,
    title,
    completed: false,
  }).then(() => {
    res.status(200).json({
      message: "todo berhasil ditambah",
    });
  });
};

const updateTodo = async (req, res) => {
  const userid = req.userid;
  const id = req.params.id;
  const { title, completed } = req.body;
  db.Todo.update(
    {
      title: title,
      completed: completed,
    },
    {
      where: {
        id: id,
        id_user: userid,
      },
    }
  )
    .then((num) => {
      if (num == 1) {
        res.json({
          message: "Todo sukses di update.",
          data: req.body,
        });
      } else {
        res.json({
          message: `gagal update todo id=${id}. mungkin todo tidak ada atau req.body kosong!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "error",
        data: null,
      });
    });
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;
  const userid = req.userid;

  try {
    const todo = await db.Todo.findOne({
      where: { id, id_user: userid },
    });

    if (!todo) {
      return res.status(404).json({
        message: `gagal hapus todo id=${id}. mungkin todo tidak ada`,
      });
    } else {
      await todo.destroy();
      return res.status(200).json({ message: "Berhasil hapus todo" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};
