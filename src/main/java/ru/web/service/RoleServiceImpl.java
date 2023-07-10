package ru.web.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.web.dao.RoleRepository;
import ru.web.model.Role;

@Service
@RequiredArgsConstructor
@Slf4j
public class RoleServiceImpl implements RoleService {

    private final RoleRepository roleRepository;

    @Override
    @Transactional
    public void addNewRole(Role role) {
        log.info("Saving new role {} to database", role.getNameRole());
        Role roleByName = roleRepository.findByNameRole(role.getNameRole());
        if (roleByName != null) {
            throw new IllegalStateException("Role taken");
        }
        roleRepository.save(role);
    }

    @Override
    @Transactional(readOnly = true)
    public Role findByNameRole(String nameRole) {
        return roleRepository.findByNameRole(nameRole);
    }
}
