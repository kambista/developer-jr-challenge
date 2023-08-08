import { getConnection } from "./database";

const get = async (req, res) => {
    try {
        const [rows] = await getConnection().query("SELECT id, name, contenido FROM notas");
        res.json({ success: true, data: rows });
    } catch (error) {
        res.status(500);
        res.json({ success: false, message: error.message });
    }
};

const getId = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows] = await getConnection().query("SELECT id, name,contenido FROM  notas WHERE id = ?", id);
        res.json({ success: true, data: rows[0]});
    } catch (error) {
        res.status(500);
        res.json({ success: false, message: error.message });
    }
};

const add = async (req, res) => {
    try {
        const { name, contenido } = req.body;

        if (name === undefined || contenido === undefined) {
            res.status(400).json({ success: false, message: "Bad Request. Please fill all field." });
        }

        const contenidoNota = { name, contenido };
        await getConnection().query("INSERT INTO notas SET ?", contenidoNota);
        res.json({ success: true, message: "Nota added" });
    } catch (error) {
        res.status(500);
        res.json({ success: false, message: error.message });
    }
};

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, contenido } = req.body;

        if (id === undefined || name === undefined || contenido === undefined) {
            res.status(400).json({ success: true, message: "Bad Request. Please fill all field." });
        }

        const nota = { name, contenido };
        await getConnection().query("UPDATE notas SET ? WHERE id = ?", [nota, id]);
        res.json({ success: true, message: "Nota updated" });
    } catch (error) {
        res.status(500);
        res.json({ success: false, message: error.message });
    }
};

const deleteNota = async (req, res) => {
    try {
        const { id } = req.params;
        await getConnection().query("DELETE FROM notas WHERE id = ?", id);
        res.json({ success: true, message: "Nota deleted" });
    } catch (error) {
        res.status(500);
        res.json({ success: false, message: error.message });
    }
};

export const methods = {
    get,
    getId,
    add,
    update,
    deleteNota
};