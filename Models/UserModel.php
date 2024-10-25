<?php

namespace Francois\Models;

use Francois\Models\ModelManager;

class UserModel extends ModelManager
{

    protected $id;
    protected $pseudo;
    protected $mail;
    protected $password;
    protected $role;
    protected $confirmKey;
    protected $confirm;

    public function __construct()
    {
        $this->table = "miamusers";
    }

    // Liste des setters

    public function setId($id)
    {
        $id = (int) $id;
        if ($id > 0) {
            $this->id = $id;
        }
    }
    public function setPseudo($pseudo)
    {
        if (is_string($pseudo)) {
            $this->pseudo = $pseudo;
        }
    }
    public function setMail($mail)
    {
        if (is_string($mail)) {
            $this->mail = $mail;
        }
    }
    public function setPassword($password)
    {
        if (is_string($password)) {
            $this->password = $password;
        }
    }
    public function setRole($role)
    {
        $role = (int) $role;
        if ($role > 0) {
            $this->role = $role;
        }
    }
    public function setConfirmKey($confirmKey)
    {
        if (is_string($confirmKey)) {
            $this->confirmKey = $confirmKey;
        }
    }
    public function setConfirm($confirm)
    {
        $confirm = (int) $confirm;
        if ($confirm > 0) {
            $this->confirm = $confirm;
        }
    }

    // Liste des getters

    public function id()
    {
        return $this->id;
    }
    public function pseudo()
    {
        return $this->pseudo;
    }
    public function mail()
    {
        return $this->mail;
    }
    public function password()
    {
        return $this->password;
    }
    public function role()
    {
        return $this->role;
    }
    public function confirmKey()
    {
        return $this->confirmKey;
    }
    public function confirm()
    {
        return $this->confirm;
    }

    // Méthode qui récupère un élément suivant son pseudo
    public function findByPseudo($pseudo)
    {
        return $this->request("SELECT * FROM " . $this->table . " WHERE pseudo = ?", [$pseudo])->fetch();
    }
    // Méthode qui update le confirm de l'user
    public function updateConfirm($userId)
    {
        return $this->request('UPDATE ' . $this->table . ' SET confirm = 2 WHERE id = ?', [$userId]);
    }
    // Méthode qui récupère un utilisateur via $auth
    public function findForCookie($auth)
    {
        return $this->request("SELECT * FROM " . $this->table . " WHERE id = ?", [$auth[0]])->fetch();
    }
    // Méthode qui permet de récupérer le nombre d'utilisataur
    public function userCount()
    {
        $result = $this->request("SELECT count(*) as nbUsers FROM " . $this->table)->fetch();
        return $result['nbUsers'];
    }
    // Méthode qui récupère tout les membres
    public function findAll()
    {
        return $this->request("SELECT * FROM " . $this->table . " ORDER BY id")->fetchAll();
    }
    // Méthode qui permet de supprimer un utilisateur
    public function deleteUser($id)
    {
        return $this->request("DELETE FROM " . $this->table . " WHERE id = ?", [$id]);
    }
    // Méthode qui récupère un élément suivant son id
    public function findById($id)
    {
        return $this->request("SELECT * FROM " . $this->table . " WHERE id = ?", [$id])->fetch();
    }
    // Méthode qui permet de modifier un utilisateur
    public function updateUser($id, $newMail, $newPseudo, $newRole, $newConfirm)
    {
        return $this->request('UPDATE ' . $this->table . ' SET mail=?,pseudo=?,role=?,confirm=? WHERE id = ?', [$newMail, $newPseudo, $newRole, $newConfirm, $id]);
    }
    // Méthode qui récupère un élément suivant son pseudo
    public function findByMail($mail)
    {
        return $this->request("SELECT * FROM " . $this->table . " WHERE mail = ?", [$mail])->fetch();
    }
    // Méthode qui permet de modifier un mot de passe
    public function updatePassword($passwordHach, $id)
    {
        return $this->request('UPDATE ' . $this->table . ' SET password = ? WHERE id = ?', [$passwordHach, $id]);
    }
}
