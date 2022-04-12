import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useEffect } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { format as rutFormat } from 'rut.js';
import { useSelector } from 'react-redux';

function BasicInfoTab(props) {
  const { arrPortals } = useSelector((store) => store.main.portals);
  const methods = useFormContext();
  const { control, formState, watch, setValue } = methods;
  const { errors } = formState;

  const run = watch('run');

  useEffect(() => {
    if (run !== '' && run !== undefined) {
      setValue('run', rutFormat(run), { shouldValidate: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [run]);

  return (
    <div>
      <FormControl className="mt-8 mb-16" fullWidth error={!!errors.portalId}>
        <InputLabel id="portal-label">Portal</InputLabel>
        <Controller
          name="portalId"
          control={control}
          render={({ field }) => (
            <Select {...field} labelId="portal-label" id="portal_id" label="Portal">
              {arrPortals.map((portal) => (
                <MenuItem key={portal.id} value={portal.id}>
                  {portal.name}
                </MenuItem>
              ))}
            </Select>
          )}
        />
        {!!errors.portalId && <FormHelperText error>{errors?.portalId?.message}</FormHelperText>}
      </FormControl>
      <Controller
        name="run"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            error={!!errors.run}
            helperText={errors?.run?.message}
            label="Rut"
            id="run"
            variant="outlined"
            fullWidth
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            error={!!errors.password}
            helperText={errors?.password?.message}
            label="Contraseña"
            id="password"
            variant="outlined"
            fullWidth
          />
        )}
      />
    </div>
  );
}

export default BasicInfoTab;
