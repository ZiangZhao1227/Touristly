import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type Props = {
  zone: string;
  setZones: React.Dispatch<React.SetStateAction<string>>;
};

export default function BasicSelect({ zone, setZones }: Props) {
  const handleChange = (event: SelectChangeEvent) => {
    setZones(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 450 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Zones</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={zone}
          label="zone"
          onChange={handleChange}
        >
          <MenuItem value={"AB"}>AB</MenuItem>
          <MenuItem value={"BC"}>BC</MenuItem>
          <MenuItem value={"D"}>D</MenuItem>
          <MenuItem value={"ABC"}>ABC</MenuItem>
          <MenuItem value={"CD"}>CD</MenuItem>
          <MenuItem value={"BCD"}>BCD</MenuItem>
          <MenuItem value={"ABCD"}>ABCD</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
