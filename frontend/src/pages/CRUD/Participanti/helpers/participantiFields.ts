const participantiFields = {
  id: { type: 'id', label: 'ID' },

  Partener: {
    type: 'enum',
    label: 'Partener',

    options: [
      { value: 'P-CCIBN', label: 'P-CCIBN' },
      { value: 'INCEPTUS', label: 'INCEPTUS' },

    ],
  },

  Nume: { type: 'string', label: 'Nume' },

  Prenume: { type: 'string', label: 'Prenume' },

  Varsta: { type: 'int', label: 'Varsta' },

  Telefon: { type: 'int', label: 'Telefon' },

  email: { type: 'string', label: 'Email' },

  Cnp: { type: 'int', label: 'Cnp' },

  Gen: {
    type: 'enum',
    label: 'Gen',

    options: [
      { value: 'Barbati', label: 'Barbati' },

      { value: 'Femei', label: 'Femei' },
    ],
  },

  Nationalitate: { type: 'string', label: 'Nationalitate' },

  Judet: {
    type: 'enum',
    label: 'Judet',

    options: [
      { value: 'Alba', label: 'Alba' },

      { value: 'Bihor', label: 'Bihor' },

      { value: 'Bistrita-Nasaud', label: 'Bistrita-Nasaud' },

      { value: 'Brasov', label: 'Brasov' },

      { value: 'Cluj', label: 'Cluj' },

      { value: 'Covsna', label: 'Covsna' },

      { value: 'Gorj', label: 'Gorj' },

      { value: 'Harghita', label: 'Harghita' },

      { value: 'Maramures', label: 'Maramures' },

      { value: 'Mehedinti', label: 'Mehedinti' },

      { value: 'Mures', label: 'Mures' },

      { value: 'Olt', label: 'Olt' },

      { value: 'Salaj', label: 'Salaj' },

      { value: 'Satu-Mare', label: 'Satu-Mare' },

      { value: 'Sibiu', label: 'Sibiu' },

      { value: 'Valcea', label: 'Valcea' },
    ],
  },

  Adresa: { type: 'string', label: 'Adresa' },

  Domiciliul: {
    type: 'enum',
    label: 'Domiciliul',

    options: [
      { value: 'Urban', label: 'Urban' },

      { value: 'Rural', label: 'Rural' },
    ],
  },

  Companie: { type: 'string', label: 'Companie' },

  Domeniu: { type: 'string', label: 'Domeniu' },

  Functie: { type: 'string', label: 'Functie' },

  Statut: {
    type: 'enum',
    label: 'Statut',

    options: [
      { value: 'Angajat', label: 'Angajat' },

      { value: 'PFA', label: 'PFA' },
    ],
  },

  ISCED: {
    type: 'enum',
    label: 'ISCED',

    options: [
      { value: 'ISCED 2', label: 'ISCED 2' },

      { value: 'ISCED 3', label: 'ISCED 3' },

      { value: 'ISCED 4', label: 'ISCED 4' },

      { value: 'ISCED 5', label: 'ISCED 5' },

      { value: 'ISCED 6', label: 'ISCED 6' },

      { value: 'ISCED 7', label: 'ISCED 7' },

      { value: 'ISCED 8', label: 'ISCED 8' },

      { value: 'ISCED 9', label: 'ISCED 9' },
    ],
  },

  INTRARE: { type: 'date', label: 'INTRARE' },

  IESIRE: { type: 'date', label: 'IESIRE' },

  INDICATORI: { type: 'relation_many', label: 'INDICATORI' },

 

  ELIGIBILITATE: { type: 'date', label: 'ELIGIBILITATE' },

  EXPERT: { type: 'relation_one', label: 'EXPERT' },

  BFA: { type: 'date', label: 'BFA' },

  CONSILIERE: { type: 'datetime', label: 'CONSILIERE' },

  Pocu: {
    type: 'enum',
    label: 'POCUFORM',

    options: [
      { value: 'Da', label: 'Da' },

      { value: 'Nu', label: 'Nu' },
    ],
  },

  Cursuri: { type: 'relation_many', label: 'Cursuri' },
  Status: {
    type: 'enum',
    label: 'Status',

    options: [
      { value: 'Finalizare implicare proiect', label: 'Finalizare implicare proiect' },

      { value: 'Abandon', label: 'Abandon' },
    ],
  },
};

export default participantiFields;
